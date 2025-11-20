export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      blog_posts: {
        Row: {
          author: string
          category: string | null
          content: string
          created_at: string | null
          excerpt: string | null
          featured_image: string | null
          id: string
          published_at: string | null
          slug: string
          title: string
        }
        Insert: {
          author: string
          category?: string | null
          content: string
          created_at?: string | null
          excerpt?: string | null
          featured_image?: string | null
          id?: string
          published_at?: string | null
          slug: string
          title: string
        }
        Update: {
          author?: string
          category?: string | null
          content?: string
          created_at?: string | null
          excerpt?: string | null
          featured_image?: string | null
          id?: string
          published_at?: string | null
          slug?: string
          title?: string
        }
        Relationships: []
      }
      events: {
        Row: {
          created_at: string | null
          description: string | null
          event_type: string | null
          id: string
          image_url: string | null
          location: string | null
          significance: string | null
          title: string
          typical_month: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          event_type?: string | null
          id?: string
          image_url?: string | null
          location?: string | null
          significance?: string | null
          title: string
          typical_month?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          event_type?: string | null
          id?: string
          image_url?: string | null
          location?: string | null
          significance?: string | null
          title?: string
          typical_month?: string | null
        }
        Relationships: []
      }
      gallery_photos: {
        Row: {
          created_at: string | null
          description: string
          id: string
          image_url: string
          is_anonymous: boolean | null
          is_approved: boolean | null
          location: string | null
          photographer_name: string | null
        }
        Insert: {
          created_at?: string | null
          description: string
          id?: string
          image_url: string
          is_anonymous?: boolean | null
          is_approved?: boolean | null
          location?: string | null
          photographer_name?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string
          id?: string
          image_url?: string
          is_anonymous?: boolean | null
          is_approved?: boolean | null
          location?: string | null
          photographer_name?: string | null
        }
        Relationships: []
      }
      itineraries: {
        Row: {
          activities: string[] | null
          created_at: string | null
          description: string | null
          duration: string
          highlights: string[] | null
          id: string
          is_featured: boolean | null
          title: string
        }
        Insert: {
          activities?: string[] | null
          created_at?: string | null
          description?: string | null
          duration: string
          highlights?: string[] | null
          id?: string
          is_featured?: boolean | null
          title: string
        }
        Update: {
          activities?: string[] | null
          created_at?: string | null
          description?: string | null
          duration?: string
          highlights?: string[] | null
          id?: string
          is_featured?: boolean | null
          title?: string
        }
        Relationships: []
      }
      reviews: {
        Row: {
          attraction_name: string
          author_email: string | null
          author_name: string
          comment: string | null
          created_at: string | null
          id: string
          is_approved: boolean | null
          rating: number
        }
        Insert: {
          attraction_name: string
          author_email?: string | null
          author_name: string
          comment?: string | null
          created_at?: string | null
          id?: string
          is_approved?: boolean | null
          rating: number
        }
        Update: {
          attraction_name?: string
          author_email?: string | null
          author_name?: string
          comment?: string | null
          created_at?: string | null
          id?: string
          is_approved?: boolean | null
          rating?: number
        }
        Relationships: []
      }
      visitor_stats: {
        Row: {
          id: string
          last_updated: string | null
          visit_count: number
        }
        Insert: {
          id?: string
          last_updated?: string | null
          visit_count?: number
        }
        Update: {
          id?: string
          last_updated?: string | null
          visit_count?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      increment_visitor_count: { Args: never; Returns: number }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
